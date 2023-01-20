import "./Meta.css";

export const Meta = (props: {step: number}) => {
    const step = props.step;

    const metas: Record<number, {material: string, dimension: string, weight: string, eletrification: string}> = {
        1: {
            material: "Copper",
            dimension: "H 33 x W 15 x D 15",
            weight: "2,5 kg",
            eletrification: "LED 10W | G9 |  220-240V | 50 Hz"
        },
        2: {
            material: "Iron",
            dimension: "H 104 x W 132 x D 125",
            weight: "12,5 kg",
            eletrification: "LED 12W | G9 |  220-240V | 50 Hz"
        },
        3: {
            material: "Metal",
            dimension: "H 104 x W 132 x D 125",
            weight: "12,5 kg",
            eletrification: "LED 12W | G9 |  220-240V | 50 Hz"
        },
    }

  return (
    <div className="meta">
        <ul>
            <li><strong>Material:</strong> {metas[step].material} </li>
            <li><strong>Dimension (cm):</strong> <br />{metas[step].dimension}</li>
            <li><strong>Net weight:</strong> {metas[step].weight}</li>
            <li><strong>Electrification:</strong> <br />{metas[step].eletrification}</li>
        </ul>

        <img src={`/images/Lamp-${step}.png`} alt="Lampe" />
    </div>
  )
}