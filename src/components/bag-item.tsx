import { Button, Stack } from "react-bootstrap";
import { useMainContext } from "../context/main-context";
import menuItems from "../data/menu.json";
import { formatCurrency } from "../utilities/currency-format";

interface BagItemProps {
  id: number;
  amount: number;
}

export function BagItem({ id, amount }: BagItemProps) {
  const { removeFromBag } = useMainContext();
  const bagItem = menuItems.find((item) => item.id === id);
  if (!bagItem) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={bagItem.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {bagItem.name}
          {amount > 1 && (
            <span style={{ fontSize: ".9rem" }} className="text-muted">
              {` x${amount}`}
            </span>
          )}
        </div>
        <div style={{ fontSize: ".9rem" }} className="text-muted">
          {formatCurrency(bagItem.price)}
        </div>
      </div>
      <div>{formatCurrency(bagItem.price * amount)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromBag(bagItem.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
