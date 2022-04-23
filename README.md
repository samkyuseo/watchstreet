# watchvalue.io

Robinhood for watches.

## Formatting

Every page is formatted in the same way

```
<>
    <Navbar/>
    <Page>
        <Content>
            <Section>
            <Section/>
        </Content>
        <StickySideBar/>
    <Page>
</>
```

- The `Navbar` is set to `position: fixed` and lives right under the root div.
- The `Page` component does a few things:
  - Sets the width of the content sitting inside the page.
  - Uses `display: flex` and `justifyContent: space-between` to keep the side bar and the content side by side
  - Has a top and bottom `margin` for content to have some space vertically
- The `Content` component takes up 60% of the space in the page on the right side.
- Each `Section`component simply takes up 100% of space inside the content block and also adds a 40px margin
- The `StickySideBar` component takes up 35% of the space on the left side.
  - Takes an optional height to let you set the height of the border surrounding the thing you are putting in

## Data Models

- Collections large, documents small (<1mb)
- `users` collection
  - a `user` has many `watches`

## Random thoughts

- The goal for us is to have something be sticky while also having a fixed height %

## Types

- There will be one `types.ts` file under the root directory that has global types or types used by more than one component group
  - Lots of response types from API calls will be stored in here since API call contents are almost always used outside of the API call file
- There will also be a `types.ts` file under the component directory for types shared between child and parent components only
