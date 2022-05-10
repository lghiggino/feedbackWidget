import { useState } from "react"
import { Popover } from "@headlessui/react"
import { LoggedInNavigation } from "./LoggedInNavigation"


export function Navbar({user, setUser, navState, setNavState }: any) {
    const activeButtonClass = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
    const dormantButtonClass = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

    return (
        <Popover>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <Popover.Button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Popover.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                            </div>
                            { user &&
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => { setNavState("Dashboard") }}
                                        type="button"
                                        className={navState === "Dashboard" ? activeButtonClass : dormantButtonClass}
                                        aria-current="page">
                                        Dashboard
                                    </button>

                                    <button
                                        onClick={() => { setNavState("Team") }}
                                        type="button"
                                        className={navState === "Team" ? activeButtonClass : dormantButtonClass}>
                                        Team
                                    </button>

                                    <button
                                        onClick={() => { setNavState("Projects") }}
                                        type="button"
                                        className={navState === "Projects" ? activeButtonClass : dormantButtonClass}>
                                        Projects
                                    </button>

                                    <button
                                        onClick={() => { setNavState("Calendar") }}
                                        type="button"
                                        className={navState === "Calendar" ? activeButtonClass : dormantButtonClass}>
                                        Calendar
                                    </button>
                                </div>
                            </div>
                            }
                        </div>
                        {user ?
                            <LoggedInNavigation setUser={setUser} />
                            :
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    onClick={() => { setNavState("Login"); setUser(true); }}
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    Login
                                </button>
                            </div>
                        }

                    </div>
                </div>


                <div className="sm:hidden" id="mobile-menu">
                    <Popover.Panel className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                        <Popover.Button>
                            <button
                                onClick={() => { setNavState("Dashboard") }}
                                type="button"
                                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                                aria-current="page">
                                Dashboard
                            </button>
                        </Popover.Button>

                        <Popover.Button>
                            <button
                                onClick={() => { setNavState("Team") }}
                                type="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Team
                            </button>
                        </Popover.Button>

                        <Popover.Button>
                            <button
                                onClick={() => { setNavState("Projects") }}
                                type="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Projects
                            </button>
                        </Popover.Button>

                        <Popover.Button>
                            <button
                                onClick={() => { setNavState("Calendar") }}
                                type="button"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                Calendar
                            </button>
                        </Popover.Button>
                    </Popover.Panel>
                </div>
            </nav>
        </Popover>

    )
}