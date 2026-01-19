const TTL = 1000 * 60 * 60 * 24; // 24 hours

export function getCache<T>(key: string): T | null {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;

        const { data, timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > TTL) {
            localStorage.removeItem(key);
            return null;
        }

        return data as T;
    } catch {
        localStorage.removeItem(key);
        return null;
    }
}

export function setCache<T>(key: string, data: T) {
    localStorage.setItem(
        key,
        JSON.stringify({
            data,
            timestamp: Date.now(),
        })
    );
}
