export function formatCurrency(value) {
    if (value) {
      return value
        .toString()
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return 0;
  }