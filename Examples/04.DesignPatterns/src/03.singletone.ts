class Singleton {
    private id: number;

    private constructor(id: number){
        this.id = id;
    }

    private static instance: Singleton;

    static createInstance(id: number) {
        if(!Singleton.instance){
            return new Singleton(id);
        }

        return Singleton.instance;
    }
}