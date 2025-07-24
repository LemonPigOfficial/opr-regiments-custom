export const transformRuleText = (rule: string, multiplier: number, BlastTemplates: boolean) => {
  let result = rule.replace(
    /take(s)? (\d+) hits?/,
    (_, ...grps) => `take${grps[0] || ""} ${parseInt(grps[1]) * multiplier} hits`
  );

  result = result.replace(/(\d+)[\"”]/, (_, ...grps) => {
    const range = parseInt(grps[0]);
    return `${range * (BlastTemplates ? 0.5 : 1)}"`;
  });

  return result;
}