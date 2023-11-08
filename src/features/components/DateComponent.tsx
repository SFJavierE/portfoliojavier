interface TimeDate {
    date: Date;
}

const DateComponent : React.FC<TimeDate> = ({date}) : React.ReactElement => (
    <span>
        {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
    </span>
)

export default DateComponent;