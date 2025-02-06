export interface Food {
    _id: string;
    name: string;
    price: number;
    inventory: number;
    image: string; // Adjust this based on how you store images (e.g., URL, or reference to Sanity)
    description: string;
    // Add other fields if necessary
  }
  