export const getOperatorsInNeutralStatuses = (state, statuses) => {
  return state
    .flatMap((department) =>
      department.operators.filter((operator) =>
        statuses.includes(operator.status)
      )
    )
    .reduce(
      (acc, operator) =>
        !acc.some((el) => el.fullname === operator.fullname)
          ? [...acc, operator]
          : acc,
      []
    );
};
