import Link from "next/link"
import Image from "next/image"
import "@/uploads/styles/component/component.css"

const MonthlyDonorCard = ({
    CardImg,
    CardWidth,
    CardHeight,
    CardHeading,
    CardDescription = "",
    CardStartsFromLabel = "",
    CardPrice = "",
    CardPricePeriod = "",
    CardBtnText = "",
    detailLink = "/",
}) => {
    return (
        <Link href={detailLink} className="donor-card">
            <figure>
                <Image src={CardImg} width={CardWidth} height={CardHeight} alt="img" />
            </figure>

            <figcaption>
                <h4>{CardHeading}</h4>
                <p>{CardDescription}</p>

                <div className="bottom-flex">
                    <div className="title">
                        <h6>{CardStartsFromLabel}</h6>
                        <h5>{CardPrice} / {CardPricePeriod}</h5>
                    </div>

                    <div className="btn primary-btn" >{CardBtnText}</div>
                </div>
            </figcaption>
        </Link>
    )
}

export default MonthlyDonorCard