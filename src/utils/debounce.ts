export default function debounce(func: (...args: any[]) => void, wait: number, immediate?: boolean) {
  var timeout: NodeJS.Timeout | null;
  return function(this: any, ...args: any[]) {
      var context:any = this
      var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
			if (timeout) clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
  };
};