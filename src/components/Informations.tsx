export default function Information(){
    return(
        <div className="w-full flex flex-col gap-7">
            <div className="text-center">
                <h3 className="text-3xl font-bold">Сценарии использования</h3>
            </div>
            <div className="w-full flex justify-between gap-10">
                <div className="w-1/2 flex flex-col">
                    <div className="w-full border bg-purple-600 text-white rounded-lg text-center p-4 font-semibold text-lg">
                        <h3>на компьютере</h3>
                        <div className="flex w-full">
                            <div className="flex flex-col w-1/2">
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col">
                    <div className="w-full border bg-purple-600 text-white rounded-lg text-center p-4 font-semibold text-lg">
                        <h3>С роботами</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

