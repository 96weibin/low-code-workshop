import lelveContext from './lelvecontext'

const Section: React.FC<{level: number, children: any}> = ({level, children})=>{
  return (<>
    <section>
      <lelveContext.Provider value={level}> {children}</lelveContext.Provider>
    </section>
  </>)
}


export default Section
