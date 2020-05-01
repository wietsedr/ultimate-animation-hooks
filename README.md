# ultimate-animation-hooks
A collection of animation hooks built on React

## useAppear.js
A custom React hook to detect when an element is in viewport. Works great if you want to animate an element the moment it is in viewport.

### Parameters
- target: React ref
- threshold (optional): 0 to 1

### Usage
Use in any React (> 16.8.0) project, like so:
```
import useAppear from '~/appear'

const YourElement = () => {
  const yourElementRef = useRef(null)
  const isVisible = useAppear(yourElementRef);

  return <div className={`isVisible ? ' is-visible' : ''`} ref={yourElementRef) />
}
```

## useParallax.js
A custom React hook for creating a parallax scrolling effect with a supplied image ref.

## Parameters
- imageRef: React ref
- factor (optional): 0 to 1

## Usage
Use in any React (> 16.8.0) project, like so:
```
import useVerticalParallax from '~/parallax'

const YourElement = () => {
  const yourElementRef = useRef(null)
  const parallaxY = useVerticalParallax(yourElementRef, 0.1)

  return <div style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }} ref={yourElementRef} />
}
```

The hooks returns the correct parallax scrolling value for your element. Can be used for unlimited elements in your components.
