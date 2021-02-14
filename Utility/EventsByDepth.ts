import { Schedule, event } from "../sample_data/sample_data_types";
import { RandomId } from "./RandomId";
import { TimeToMins } from "./TimeUtil";

interface End {
  time: string;
  value: number;
  depth: number;
  initialPos: number;
  group_id: string;
}

export interface EventColoured extends event {
  color: string;
}

export interface EventByDepth {
  depth: number;
  events: EventColoured[];
}

export function EventsByDetph(schedules: Schedule[]) {
  let allEvents: EventColoured[] = [];

  schedules.map((v) => {
    v.events.map((e) => {
      allEvents.push({ ...e, color: v.color });
    });
  });

  let allTimes: {
    time: string;
    value: number;
    initialPos: number;
  }[] = [];

  allEvents.map((e, i) => {
    if ("start_time" in e.period) {
      allTimes.push({ time: e.period.start_time, value: 1, initialPos: i });
      allTimes.push({ time: e.period.end_time, value: -1, initialPos: i });
    }
  });

  allTimes.sort((a, b) => TimeToMins(a.time) - TimeToMins(b.time));

  let cumsum = [0];
  allTimes.map((v, i) => {
    cumsum.push(cumsum[i] + v.value);
  });

  let cumsumWithGroup: {
    sum: number;
    group_id: string;
  }[] = [];

  let groupIds = [RandomId()];

  cumsum.map((c, i) => {
    if (c === 0) {
      groupIds.push(RandomId());
    } else {
      groupIds.push(groupIds[i]);
    }
  });

  cumsum.map((c, i) => {
    cumsumWithGroup.push({ sum: c, group_id: groupIds[i + 1] });
  });

  let results_array: End[] = [];

  allTimes.map((v, i) => {
    results_array.push({
      time: v.time,
      value: v.value,
      depth: cumsumWithGroup[i + 1].sum,
      group_id: cumsumWithGroup[i + 1].group_id,
      initialPos: v.initialPos,
    });
  });

  let start_time_with_depth: End[] = [];
  let end_time_with_depth: End[] = [];

  results_array.map((v) => {
    if (v.value == 1) {
      start_time_with_depth.push(v);
    } else {
      end_time_with_depth.push(v);
    }
  });

  const distinctGroups = [
    ...new Set(start_time_with_depth.map((x) => x.group_id)),
  ];

  let distinctGroupsWithDepth: { group_id: string; depth: number }[] = [];

  distinctGroups.map((v) => {
    let depth = 0;
    start_time_with_depth.map((s) => {
      if (v === s.group_id) {
        if (s.depth > depth) {
          depth = s.depth;
        }
      }
    });
    distinctGroupsWithDepth.push({ group_id: v, depth: depth });
  });
);

  let results: { event: EventColoured; group_id: string }[] = [];

  const distincGroupsAsObject: {
    [index: string]: {
      depth: number;
      events: EventColoured[];
    };
  } = {};

  start_time_with_depth.map((v) => {
    allEvents.map((e, i) => {
      if (i === v.initialPos) {
        results.push({ event: e, group_id: v.group_id });
      }
    });
  });


  distinctGroupsWithDepth.map(
    (v) => (distincGroupsAsObject[v.group_id] = { depth: v.depth, events: [] })
  );


  // transform to array

  // For all of these groups,

  // These need to be organised into groups so that they can get their array number.

  results.map((v) => {
    distincGroupsAsObject[v.group_id].events.push(v.event);
  });

  const resultAsArray = Object.keys(distincGroupsAsObject).map(
    (commentKey) => distincGroupsAsObject[commentKey]
  );

  return resultAsArray;
}
