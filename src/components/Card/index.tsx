
interface CardProps {
    data: string[];
}

export function Card({ data }: CardProps) {
    return (
        <div className="grid grid-cols-4 gap-6 mt-16">

            {
                (data) ? (
                    data.map(item => {
                        return (
                            <a href="" className="relative rounded-lg overflow-hidden bg-slate-600" key={item.id}>
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                                <strong className="font-bold text-white">{item.title}</strong>
                            </a>
                        )
                    })
                ) : ""
            }

        </div>
    )
}