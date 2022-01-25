# watchvalue.io

## Formatting

Every page is formatted in the same way

```
<>
    <Navbar/>
    <Page>
        <Section>
        <Section/>
        <StickySideBar/>
    <Page>
</>
```

- The `Navbar` is set to `position: fixed` and lives right under the root div.
- The `Page` component does a few things:
  - Sets the width of the content sitting inside the page.
  - Uses `display: flex` and `justifyContent: space-between` to keep the side bar and the content side by side
  - Has a top and bottom `margin` for content to have some space vertically
- The `Section` component takes up 60% of the space in the page on the right side.
- The `StickySideBar` component takes up 35% of the space on the left side.
