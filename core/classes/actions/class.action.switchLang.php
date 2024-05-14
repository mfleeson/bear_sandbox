<?php
/*
 * Copyright (c) 2021-2021-2024 Bearsampp
 * License:  GNU General Public License version 3 or later; see LICENSE.txt
 * Author: bear
 * Website: https://bearsampp.com
 * Github: https://github.com/Bearsampp
 */

class ActionSwitchLang
{
    public function __construct($args)
    {
        global $bearsamppConfig;

        if (isset($args[0]) && !empty($args[0])) {
            $bearsamppConfig->replace(Config::CFG_LANG, $args[0]);
        }
    }
}
