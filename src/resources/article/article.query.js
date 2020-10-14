const yearFilter = (from = 1950, to = new Date().getFullYear) => [
  { year: { $gte: parseInt(from, 10) } },
  { year: { $lte: parseInt(to, 10) } },
];

const practiceFilter = (practice) => {
  if (typeof practice === 'undefined') {
    return [{}];
  }
  // If practice is send, filter by it
  return [{ practice }];
};

const benefitFilter = (benefits) => {
  if (typeof benefits === 'undefined') {
    return [{}];
  }
  // If benefits is send, filter by it
  return benefits.map((benefit) => {
    const filter = {};
    filter[`benefits.${benefit}`] = { $exists: true };
    return filter;
  });
};

const articleQuery = (from, to, practice, benefits) => ({
  $and: [
    ...practiceFilter(practice),
    ...yearFilter(from, to),
    ...benefitFilter(benefits),
  ],
});
export default articleQuery;
