export function cmTimeAgo(value: any): string {
    if (value) {
        const now = new Date();
        const date = new Date(value);

        // Get the year, month, and day for both now and the provided date
        const nowYear = now.getFullYear();
        const nowMonth = now.getMonth(); // Months are 0-indexed (0 = January)
        const nowDay = now.getDate();

        const valueYear = date.getFullYear();
        const valueMonth = date.getMonth();
        const valueDay = date.getDate();

        // Check if the full date matches (Today)
        if (nowYear === valueYear && nowMonth === valueMonth && nowDay === valueDay) {
            return 'Today';
        }

        const seconds = Math.floor((+now - +date) / 1000);
        if (seconds < 29) {
            // Less than 30 seconds ago will show as 'Just now'
            return 'Just now';
        }

        const intervals: any = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1,
        };

        let counter: number;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0) {
                return counter === 1 ? `${counter} ${i} ago` : `${counter} ${i}s ago`; // Singular or plural
            }
        }
    }
    return value;
}


export function useRuntimeConverter(runtime) {
    // Check if runtime is a valid number
    if (typeof runtime !== 'number' || isNaN(runtime) || runtime < 0) {
        return 'Invalid runtime';
    }

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const seconds = 0; // Assuming you want to keep seconds as zero

    return `${hours}h ${minutes}m ${seconds}s`;
}
