export function ResolvePath(obj: any, path: any, defaultReturn: any) {
  return path.split(".").reduce(function (prev: any, curr: any) {
    return prev && prev.hasOwnProperty(curr) ? prev[curr] : defaultReturn;
  }, obj);
}

export function FlatObject(input: any) {
  return Object.keys(input).reduce(
    (prev, curr) => flat(prev, curr, input[curr]),
    {}
  );
}

function flat(res: any, key: any, val: any, pre = ""): any {
  const prefix = [pre, key].filter((v) => v).join(".");
  return typeof val === "object"
    ? Object.keys(val).reduce(
        (prev, curr) => flat(prev, curr, val[curr], prefix),
        res
      )
    : Object.assign(res, { [prefix]: val });
}
