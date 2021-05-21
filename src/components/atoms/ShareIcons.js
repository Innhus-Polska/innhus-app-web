import React, { Component } from 'react';
import style from '../../styles/styles.module.css';
// import icon from iconPath;

export default function ShareIcons(props) {
    return (
        <a href={props.social} className={style.blogSocialIcons}>
            <div className={style.blogSocialIcons}>
                <img alt={props.socialName} />
            </div>
        </a>
    );
}
