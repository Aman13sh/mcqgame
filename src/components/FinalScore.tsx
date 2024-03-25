interface sco{
    sc:number;
}
export const FinalScore = (props:sco) => {
  return (
    <div className="flex items-center justify-center">
        <p className="">
            Your Score is {props.sc}
        </p>
    </div>
  )
}
