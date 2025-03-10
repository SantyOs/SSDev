"use client";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

let timer;
let state;
let activeRequests = 0;

function load() {
    if (state === "loading") {
        return;
    }

    state = "loading";

    timer = setTimeout(() => {
        NProgress.start();
    }, 1);
}

function stop() {
    if (activeRequests > 0) {
        return;
    }

    state = "stop";

    clearTimeout(timer);
    NProgress.done();
}

function routeChangeStart() {
    if (window.location.pathname !== Router.pathname) {
        load();
    }
}

export default function TopProgressbar() {
    useEffect(() => {
        Router.events.on("routeChangeStart", routeChangeStart);
        Router.events.on("routeChangeComplete", stop);
        Router.events.on("routeChangeError", stop);

        const originalFetch = window.fetch;
        window.fetch = async function (...args) {
            if (activeRequests === 0) {
                load();
            }

            activeRequests++;

            try {
                const response = await originalFetch(...args);
                return response;
            } catch (error) {
                return Promise.reject(error);
            } finally {
                activeRequests -= 1;
                if (activeRequests === 0) {
                    stop();
                }
            }
        };

        return () => {
            Router.events.off("routeChangeStart", routeChangeStart);
            Router.events.off("routeChangeComplete", stop);
            Router.events.off("routeChangeError", stop);
            window.fetch = originalFetch;
        };
    }, []);

    return null;
}