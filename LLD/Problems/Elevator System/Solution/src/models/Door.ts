export class Door{
    public _isOpen: boolean = false;


    open(): void{
        if(this._isOpen){
        this._isOpen = true;
        console.log("Doors Opening...");
        }
    }


    close(): void{
        if(this._isOpen){
            this._isOpen = false;
        console.log("Doors Closing...");
        }
    }

    getIsOpen(): boolean{
        return this._isOpen;
    }
}