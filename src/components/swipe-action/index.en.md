# SwipeAction

<code src="./demos/demo1.tsx"></code>

## API

| Name             | Description                                                                          | Type                       | Default |
| ---------------- | ------------------------------------------------------------------------------------ | -------------------------- | ------- |
| rightActions     | List of operation buttons on the right                                               | `Action[]`                 | `[]`    |
| leftActions      | List of operation buttons on the left                                                | `Action[]`                 | `[]`    |
| onAction         | Triggered when operation button is clicked                                           | `(action: Action) => void` | -       |
| closeOnTouchAway | Whether to return to the position automatically when other areas is clicked          | `boolean`                  | `true`  |
| closeOnAction    | Whether to return to the position automatically when the operation button is clicked | `boolean`                  | `true`  |

### Action

| Name    | Description               | Type                                                                             | Default   |
| ------- | ------------------------- | -------------------------------------------------------------------------------- | --------- |
| key     | The unique identification | `string \| number`                                                               | -         |
| text    | Text                      | `ReactNode`                                                                      | -         |
| color   | Color                     | `'light' \| 'weak' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'light'` |
| onClick | Trigger when clicked      | `(e: React.MouseEvent) => void`                                                  | -         |

## Ref

| Name  | Description                                                              | Type                                 |
| ----- | ------------------------------------------------------------------------ | ------------------------------------ |
| close | Let the slide bar return to the position                                 | `() => void`                         |
| show  | Slide out the operation button, the `side` parameter defaults to `right` | `(side?: 'left' \| 'right') => void` |

## CSS Variables

| Name         | Description      | Default   |
| ------------ | ---------------- | --------- |
| --background | background color | `#ffffff` |
