# TreeSelect

<code src="./demos/demo1.tsx"></code>

## API

### TreeSelect

```typescript | pure
type TreeSelectOption = {
  label: string
  value: string
  children?: TreeSelectOption[]
}
```

| Name         | Description                                                      | Type                                                                  | Default |
| ------------ | ---------------------------------------------------------------- | --------------------------------------------------------------------- | ------- |
| value        | Selected options                                                 | `string[]`                                                            | `[]`    |
| defaultValue | Selected options by default                                      | `string[]`                                                            | `[]`    |
| onChange     | Triggered when `value` is changed                                | `(value: string[], context: { options: TreeSelectOption[] }) => void` | -       |
| options      | Cascaded data                                                    | `TreeSelectOption[]`                                                  | `[]`    |
| fieldNames   | The customized fields of `label` `value` `children` in `options` | `{ label?: string; value?: string; children?: string }`               | `{}`    |
