import React, { Component } from 'react';
import style from '../../styles/styles.module.css';

export default function ArticleTag(props) {
    return <span className={style.articleTag}>{props.tag}</span>;
}
