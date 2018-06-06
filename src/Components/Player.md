Default player:

```jsx
<Player id="-EX4X1SP2Ls" />
```

Better Image:

```jsx
<Player id="-EX4X1SP2Ls" imageSize="maxresdefault" />
```

Addtional Styles:

```jsx
<Player
  id="-EX4X1SP2Ls"
  imageSize="maxresdefault"
  styles={{
    width: "200px",
    height: "100px"
  }}
/>
```

Event handlers:

```jsx
<Player
  id="-EX4X1SP2Ls"
  imageSize="maxresdefault"
  onStateChange={() => console.log("onStateChange")}
  onPause={() => console.log("Paused")}
/>
```
