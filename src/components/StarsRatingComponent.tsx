interface StarsRatingProps {
    rating: number;
}

const StarsRatingComponent = ({ rating }: StarsRatingProps) => {
    const stars = Math.round(rating / 2);

    return (
        <div style={{ display: "flex", gap: "4px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{color: star <= stars ? "#ffc107" : "#e4e5e9", fontSize: "18px"}}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarsRatingComponent;
