import React from 'react'
import styles from "./index.module.css"
import { usePassCode } from '../../Context'
export default function Home() {
  const {passCode} = usePassCode();
  console.log(passCode,"pass code")
  return (
    <div className={styles.tester}>yes</div>
  )
}
