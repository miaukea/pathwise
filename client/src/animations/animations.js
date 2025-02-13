import { motion, useAnimation } from 'framer-motion';
import React, { useState } from'react';
import { motionPath, useTransform } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import { motionPath, useTransform } from 'framer-motion';

export const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const hoverEffect = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
};
