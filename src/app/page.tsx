import Calendar from "@/components/calendar/Calendar";
import React, { Suspense } from "react";

function Page() {
    return (
        <Suspense fallback={<h1>Please wait, Loading...</h1>}>
            <Calendar/>
        </Suspense>
    );
}

export default Page;