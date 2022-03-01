export class Fix {
    public static SIZE:number = 1100;

    public static SineEaseOut(time:number, valueStart:number, valueEnd:number, duration:number) {
        return valueEnd * Math.sin(time / duration * (Math.PI / 2)) + valueStart;
    }
}