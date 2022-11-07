# to-vfile-mdx-meta-indentation-regression

https://twitter.com/manovotny/status/1589480418113646593

## Steps to reproduce

The only difference is `to-vfile` using `v6` and `v7`. Otherwise, examples are identical (ie. same MDX, same `remark` version, ESM, etc.).

- `npm i`
- `npm start`
- View `console.log` output and notice how indentation has changed.
