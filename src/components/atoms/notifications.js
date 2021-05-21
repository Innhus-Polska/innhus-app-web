import { Typography } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import style from '../../styles/styles.module.css';

class NofiticationsTopSection extends Component {
    render() {
        return (
            <View>
                <div class="">
                    <button class="z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none">
                        <svg
                            class="w-5 h-5 text-gray-800 dark:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                    </button>
                    <div class="right-0 z-20 mt-1 overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
                        <div class="py-2">
                            <a
                                href="#"
                                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700"
                            >
                                <img
                                    class="object-cover w-8 h-8 mx-1 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                    alt="avatar"
                                />
                                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                    <span class="font-bold" href="#">
                                        Sara Salah
                                    </span>{' '}
                                    replied on the{' '}
                                    <span class="font-bold text-blue-500" href="#">
                                        Upload Image
                                    </span>{' '}
                                    artical . 2m
                                </p>
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700"
                            >
                                <img
                                    class="object-cover w-8 h-8 mx-1 rounded-full"
                                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    alt="avatar"
                                />
                                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                    <span class="font-bold" href="#">
                                        Slick Net
                                    </span>{' '}
                                    start following you . 45m
                                </p>
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-700"
                            >
                                <img
                                    class="object-cover w-8 h-8 mx-1 rounded-full"
                                    src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                    alt="avatar"
                                />
                                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                    <span class="font-bold" href="#">
                                        Jane Doe
                                    </span>{' '}
                                    Like Your reply on{' '}
                                    <span class="font-bold text-blue-500" href="#">
                                        Test with TDD
                                    </span>{' '}
                                    artical . 1h
                                </p>
                            </a>
                            <a
                                href="#"
                                class="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <img
                                    class="object-cover w-8 h-8 mx-1 rounded-full"
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                                    alt="avatar"
                                />
                                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                                    <span class="font-bold" href="#">
                                        Abigail Bennett
                                    </span>{' '}
                                    start following you . 3h
                                </p>
                            </a>
                        </div>
                        <a
                            href="https://google.com"
                            class="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
                        >
                            See all notifications
                        </a>
                    </div>
                </div>
            </View>
        );
    }
}

export default NofiticationsTopSection;
