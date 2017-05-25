# Bouncing carousel

The bouncing carousel is an experiment with SVG animations technology.
Inspired by [Carousel](https://dribbble.com/shots/2637299-Carousel).

Animation, used in the carousel is based on [Animation SMIL](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL) specification.
All the SVG elements can be stylized using CSS, you can also create animations with CSS, 
but there are such properties in SVG that greatly enhance its capabilities. 
For example, the path attribute has a data set that defines the object's path, 
and this data can not be changed through CSS.

In the councing carousel `<animate>` tag is used, which allows 
to animate SVG without using a cumbersome JS-code, but only by 
:hover pseudoclass on the carousel element.

Visually, the desktop version creates an effect similar to the "pocket".

For the gallery images `png`, `gif` formats are preferred thus formats supporting 
transparency - this will allow the objects in it to look as effective as possible.

Carousel is ideal for the e-commerce focused websites.
