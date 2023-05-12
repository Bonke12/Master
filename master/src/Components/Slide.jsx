import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSRTbtzf1Mp52cmK2-fUMECKB-XiYhEpm3cPpqskbz2YjC8mt6h8H93LFTaRb5ZiX4ZN6hM8bVH3_HtGeb4dqw"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Products to sell</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS4dCsehCCr-AiySEOyfCS0OlScdF-GwjzdQ_pUj5RUMPJKPJrhYP1FYivx51DqXg7s3zyUvH4UcvWKRl0eGmQ"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Buy online things</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.business.com/app/uploads/2022/03/23032729/shopper_Prostock-Studio_getty-3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Take your products to send home</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;