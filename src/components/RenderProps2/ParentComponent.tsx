import { useState } from "react";

// In this example, were going to have the data that we wanto pass to th childre.
interface ParentComponentProps {
  render: (data: string[]) => React.ReactNode
}

const ParentComponent: React.FC<ParentComponentProps> = ({ render }) => {
  const [data] = useState<string[]>(["Plátano 🍌", "Manzana 🍎", "Naranja 🍊"])

  return <ul>
    {render(data)}
  </ul>
};

export default ParentComponent;
