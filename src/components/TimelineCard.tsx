
type TimelineProps = {
    icon?: string
    title?: string
    desc?:string
    sideText?:string
}

const TimelineCard = ({icon, title, desc, sideText}:TimelineProps) => {
    return ( <div className="rounded-lg p-3 flex flex-col gap-3 border border-gray-300">
     <p className="flex self-end p-1 rounded-sm">{desc}</p>
     <p className="flex justify-end p-1 rounded-sm">{icon}</p>
     <p className="flex justify-end p-1 rounded-sm">{title}</p>
     <p className="flex justify-end p-1 rounded-sm">{sideText}</p>
    </div> );
}
 
export default TimelineCard;