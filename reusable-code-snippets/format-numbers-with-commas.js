const num = 1500000;

// Convert to 1,500,000
num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');