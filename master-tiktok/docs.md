# 【css】

## -webkit-text-stroke 文字描边

参数：宽度 颜色。

```css
.h1 {
  -webkit-text-stroke: 1px #fff;
} //
```

## background-clip 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

```css
/* Keyword values */
background-clip: border-box; // 背景延伸至边框外沿（但是在边框下层）。
background-clip: padding-box; // 背景延伸至内边距（padding）外沿，包含 padding 部分，不会绘制到边框处。
background-clip: content-box; // 背景被裁剪至内容区（content box）外沿，padding 内部。
background-clip: text; // 背景被裁剪成文字的前景色。

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
```
