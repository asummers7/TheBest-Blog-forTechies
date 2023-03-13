module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (timestamp) => {
        return timestamp.toLocaleDateString();
      }
};
  