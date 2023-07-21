import {themes} from '../../../style/index'

const IconMode = ({mode}: {mode: string}) => {
  //@ts-ignore
  const color = themes[mode].text
  
  if(mode  === 'dark'){
    return (
      <>
        <svg viewBox="0 0 60 60"><g><g fill={color} fill-rule="nonzero"><path d="M41.984 15.952A28.019 28.019 0 0 1 6.225 41.906a2.021 2.021 0 0 0-2.157.69 1.966 1.966 0 0 0-.169 2.2 29.928 29.928 0 0 0 27.124 15.187c13.785-.47 25.473-10.28 28.328-23.774S55.49 9.012 43.076 3a1.966 1.966 0 0 0-2.184.312 2.016 2.016 0 0 0-.547 2.188 27.852 27.852 0 0 1 1.639 10.452zm15.971 15.664c-.909 14.412-12.57 25.8-27 26.368A27.863 27.863 0 0 1 5.669 43.827a30.02 30.02 0 0 0 38.314-27.81A29.631 29.631 0 0 0 42.2 4.8a27.966 27.966 0 0 1 15.755 26.816z" fill={color}></path><path d="M53.51 25.2a24.947 24.947 0 0 1-1.429 14.426 1 1 0 0 0 1.853.754A26.945 26.945 0 0 0 55.47 24.8a1 1 0 1 0-1.96.4zM52.005 20.4a1 1 0 0 0 1.83-.806 25.959 25.959 0 0 0-1.727-3.286 1.001 1.001 0 1 0-1.7 1.058 24.009 24.009 0 0 1 1.597 3.034zM19 30c6.075 0 11-4.925 11-11S25.075 8 19 8 8 12.925 8 19c.007 6.072 4.928 10.993 11 11zm0-20a9 9 0 1 1-9 9 9.011 9.011 0 0 1 9-9z" fill={color}></path><path d="M13 20a1 1 0 0 0 1-1 5.006 5.006 0 0 1 5-5 1 1 0 0 0 0-2 7.008 7.008 0 0 0-7 7 1 1 0 0 0 1 1zM19 6a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zM20 37v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zM32 19a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-4a1 1 0 0 0-1 1zM1 20h4a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zM8.394 9.808a1 1 0 0 0 1.414-1.414L6.979 5.565a1 1 0 0 0-1.414 1.414zM31.728 32.728a1 1 0 0 0 .707-1.707l-2.829-2.829a1 1 0 0 0-1.414 1.414l2.829 2.829a1 1 0 0 0 .707.293zM28.9 10.1a1 1 0 0 0 .707-.293l2.829-2.829a1 1 0 1 0-1.414-1.414l-2.83 2.83A1 1 0 0 0 28.9 10.1zM6.979 32.435l2.829-2.829a1 1 0 0 0-1.414-1.414l-2.829 2.829a1 1 0 1 0 1.414 1.414z" fill={color} data-original={color}></path></g></g></svg>
      </>
    )
  } else {
    return (<>
      <svg viewBox="0 0 454.785 454"><g><path d="M236.363 455.152c94.895.098 180.621-56.632 217.625-144.007a10 10 0 0 0-13.113-13.117c-66.828 28.327-143.41 21.265-203.93-18.81-60.52-40.073-96.914-107.82-96.922-180.406a214.916 214.916 0 0 1 17.125-84.507 10 10 0 0 0-13.113-13.117C40.582 45.09-17.656 155.762 4.742 265.89 27.141 376.02 123.98 455.148 236.363 455.152zM130.098 30.301c-25.149 83.445-2.426 173.957 59.148 235.633 61.676 61.574 152.188 84.293 235.629 59.148-44.953 79.691-135.172 122.496-225.332 106.91-90.156-15.59-160.77-86.199-176.356-176.36-15.59-90.16 27.215-180.378 106.91-225.331zm0 0" fill={color} data-original={color}></path></g></svg>
    </>)
  }
}

export default IconMode