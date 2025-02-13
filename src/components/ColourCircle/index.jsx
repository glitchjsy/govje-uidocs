export default function ColourCircle({ hex }) {
    return (
        <div
            style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: hex
            }}
        />
    )
}