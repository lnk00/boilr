"use client"

import styles from "./style.module.css";
import Btn from "../btn";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Nav() {
  return (
    <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="42" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="var(--gray12)" d="M 74.832031 307.503906 L 79.078125 311.703125 L 79.5 312.128906 C 92.710938 325.816406 92.570312 347.859375 79.078125 361.359375 C 65.582031 374.855469 43.550781 375 29.867188 361.78125 L 29.441406 361.359375 L 25.195312 357.15625 L 13.636719 345.546875 C 0 331.90625 0 309.582031 13.636719 295.894531 C 27.273438 282.253906 49.636719 282.253906 63.269531 295.894531 Z M 308.945312 115.402344 L 317.769531 106.578125 L 361.035156 63.292969 C 374.671875 49.652344 374.671875 27.328125 361.035156 13.640625 C 347.351562 0 325.035156 0 311.398438 13.640625 L 268.132812 56.921875 L 263.414062 61.640625 L 259.3125 65.75 L 234.492188 90.574219 C 220.859375 104.214844 220.859375 126.542969 234.492188 140.230469 L 259.3125 165.054688 L 263.746094 169.445312 L 311.730469 217.449219 C 325.367188 231.089844 347.683594 231.089844 361.363281 217.449219 C 375 203.808594 375 181.433594 361.363281 167.792969 L 313.382812 119.792969 Z M 15.617188 13.972656 L 15.617188 13.921875 C 29.253906 0.28125 51.617188 0.28125 65.253906 13.921875 L 360.703125 309.535156 C 374.386719 323.175781 374.386719 345.546875 360.703125 359.1875 C 347.070312 372.828125 324.753906 372.828125 311.070312 359.1875 L 15.617188 63.578125 C 1.980469 49.9375 1.980469 27.613281 15.617188 13.972656 Z M 15.191406 155.476562 C 28.828125 141.835938 51.144531 141.835938 64.828125 155.476562 L 98.46875 189.128906 L 171.269531 261.957031 L 219.253906 309.957031 C 232.890625 323.597656 232.890625 345.972656 219.253906 359.613281 C 205.570312 373.253906 183.253906 373.253906 169.617188 359.613281 L 121.636719 311.609375 L 48.832031 238.78125 L 15.191406 205.128906 C 1.558594 191.488281 1.558594 169.117188 15.191406 155.476562 Z M 15.191406 155.476562 " /></svg>
      <NavigationMenu.Root className={styles.NavigationMenuRoot}>
        <NavigationMenu.List className={styles.NavigationMenuList}>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#" className={styles.NavigationMenuLink}>
              Landing
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link href="#" className={styles.NavigationMenuLink}>
              Application
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#" className={styles.NavigationMenuLink}>
              Supabase
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link href="#" className={styles.NavigationMenuLink}>
              Utils
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>  
      </NavigationMenu.Root>
      <Btn small >Discover the app</Btn>
    </div>
  )
}
