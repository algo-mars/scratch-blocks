/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 *
 * After modifying this file, run `npm run translate` from the root directory
 * to regenerate `./msg/json/en.json`.
 */
'use strict';

goog.provide('Blockly.Msg.en');
goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = "всегда";
Blockly.Msg.CONTROL_REPEAT = "повторить %1";
Blockly.Msg.CONTROL_IF = "если %1 , то";
Blockly.Msg.CONTROL_ELSE = "иначе";
Blockly.Msg.CONTROL_STOP = "стоп";
Blockly.Msg.CONTROL_STOP_ALL = "все";
Blockly.Msg.CONTROL_STOP_THIS = "этот скрипт";
Blockly.Msg.CONTROL_STOP_OTHER = "другие скрипты спрайта";
Blockly.Msg.CONTROL_WAIT = "ждать %1 секунд";
Blockly.Msg.CONTROL_WAITUNTIL = "ждать до %1";
Blockly.Msg.CONTROL_REPEATUNTIL = "повторять пока не %1";
Blockly.Msg.CONTROL_WHILE = "повторять пока %1";
Blockly.Msg.CONTROL_FOREACH = "для каждого %1 в %2";
Blockly.Msg.CONTROL_STARTASCLONE = "когда я начинаю как клон";
Blockly.Msg.CONTROL_CREATECLONEOF = "создать клон %1";
Blockly.Msg.CONTROL_DELETETHISCLONE = "удалить клон";
Blockly.Msg.CONTROL_COUNTER = "счётчик";
Blockly.Msg.CONTROL_INCRCOUNTER = "увеличить счётчик";
Blockly.Msg.CONTROL_CLEARCOUNTER = "очистить счётчик";
Blockly.Msg.CONTROL_ALLATONCE = "всё одновременно";

// Data blocks
Blockly.Msg.DATA_SETVARIABLETO = "задать %1 значение %2";
Blockly.Msg.DATA_CHANGEVARIABLEBY = "изменить %1 на %2";
Blockly.Msg.DATA_SHOWVARIABLE = "показать переменную %1";
Blockly.Msg.DATA_HIDEVARIABLE = "скрыть переменную %1";
Blockly.Msg.DATA_ADDTOLIST = "добавить %1 к %2";
Blockly.Msg.DATA_DELETEOFLIST = "удалить %1 из %2";
Blockly.Msg.DATA_INSERTATLIST = "вставить %1 в %2 из %3";
Blockly.Msg.DATA_REPLACEITEMOFLIST = "заменить элемент %1 в %2 на %3";
Blockly.Msg.DATA_ITEMOFLIST = "элемент %1 из %2";
Blockly.Msg.DATA_LENGTHOFLIST = "длина списка %1";
Blockly.Msg.DATA_LISTCONTAINSITEM = "%1 содержит %2?";
Blockly.Msg.DATA_SHOWLIST = "показать список %1";
Blockly.Msg.DATA_HIDELIST = "скрыть список %1";

// Event blocks
Blockly.Msg.EVENT_WHENFLAGCLICKED = "когда щелкнут по %1";
Blockly.Msg.EVENT_WHENTHISSPRITECLICKED = "когда спрайт нажат";
Blockly.Msg.EVENT_WHENSTAGECLICKED = "когда кликнут по сцене";
Blockly.Msg.EVENT_WHENBROADCASTRECEIVED = "когда я получу %1";
Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO = "когда фон меняется на %1";
Blockly.Msg.EVENT_WHENGREATERTHAN = "когда %1 > %2";
Blockly.Msg.EVENT_BROADCAST = "передать %1";
Blockly.Msg.EVENT_BROADCASTANDWAIT = "передать %1 и ждать";
Blockly.Msg.EVENT_WHENKEYPRESSED = "когда клавиша %1 нажата";
Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE = 'пробел';
Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT = 'стрелка влево';
Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT = 'стрелка вправо';
Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN = 'стрелка вниз';
Blockly.Msg.EVENT_WHENKEYPRESSED_UP = 'стрелка вверх';
Blockly.Msg.EVENT_WHENKEYPRESSED_ANY = 'любая';

// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = "говорить %1 в течение %2 секунд";
Blockly.Msg.LOOKS_SAY = "сказать %1";
Blockly.Msg.LOOKS_THINKFORSECS = "думать %1  %2 секунд";
Blockly.Msg.LOOKS_THINK = "думать %1";
Blockly.Msg.LOOKS_SHOW = "показаться";
Blockly.Msg.LOOKS_HIDE = "спрятаться";
Blockly.Msg.LOOKS_CHANGEEFFECTBY = "изменить эффект %1 на %2";
Blockly.Msg.LOOKS_SETEFFECTTO = "установить эффект %1 в значение %2";
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = "убрать графические эффекты";
Blockly.Msg.LOOKS_CHANGESIZEBY = "изменить размер на %1";
Blockly.Msg.LOOKS_SETSIZETO = "установить размер %1 %";
Blockly.Msg.LOOKS_SIZE = "размер";
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = "сменить костюм на %1";
Blockly.Msg.LOOKS_NEXTCOSTUME = "следующий костюм";
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = "сменить фон на %1";
Blockly.Msg.LOOKS_GOTOFRONTBACK = "перейти в %1 слой";
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = "перейти %1 на %2 слоев";
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = "фон %1";
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = "костюм %1";
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = "сменить фон на %1 и ждать";
Blockly.Msg.LOOKS_NEXTBACKDROP = "следующий фон";

Blockly.Msg.LOOKS_HIDEALLSPRITES = "hide all sprites";
Blockly.Msg.LOOKS_EFFECT_COLOR = "color";
Blockly.Msg.LOOKS_EFFECT_FISHEYE = "fisheye";
Blockly.Msg.LOOKS_EFFECT_WHIRL = "whirl";
Blockly.Msg.LOOKS_EFFECT_PIXELATE = "pixelate";
Blockly.Msg.LOOKS_EFFECT_MOSAIC = "mosaic";
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = "brightness";
Blockly.Msg.LOOKS_EFFECT_GHOST = "ghost";
Blockly.Msg.LOOKS_CHANGESTRETCHBY = "change stretch by %1";
Blockly.Msg.LOOKS_SETSTRETCHTO = "set stretch to %1 %";
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = "front";
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = "back";
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = "forward";
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = "backward";
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = "number";
Blockly.Msg.LOOKS_NUMBERNAME_NAME = "name";

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = "идти %1 шагов";
Blockly.Msg.MOTION_TURNLEFT = "повернуть %1 на %2 градусов";
Blockly.Msg.MOTION_TURNRIGHT = "повернуть %1 на %2 градусов";
Blockly.Msg.MOTION_POINTINDIRECTION = "повернуть в направлении %1";
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = "указатель мышки";
Blockly.Msg.MOTION_POINTTOWARDS = "повернуться к %1";
Blockly.Msg.MOTION_GOTO_POINTER = 'указатель мышки';
Blockly.Msg.MOTION_GOTO_RANDOM = 'случайная позиция';
Blockly.Msg.MOTION_GOTOXY = "перейти в x: %1 y: %2";
Blockly.Msg.MOTION_GOTO = "перейти в %1";
Blockly.Msg.MOTION_GLIDESECSTOXY = "плыть %1 секунд в точку x: %2 y: %3";
Blockly.Msg.MOTION_GLIDETO_POINTER = 'указатель мышки';
Blockly.Msg.MOTION_GLIDETO_RANDOM = 'случайная позиция';
Blockly.Msg.MOTION_GLIDETO = "плыть %1 секунд в %2";
Blockly.Msg.MOTION_CHANGEXBY = "изменить x на %1";
Blockly.Msg.MOTION_SETX = "установить x в %1";
Blockly.Msg.MOTION_CHANGEYBY = "изменить y на %1";
Blockly.Msg.MOTION_SETY = "установить y в %1";
Blockly.Msg.MOTION_IFONEDGEBOUNCE = "если на краю, оттолкнуться";
Blockly.Msg.MOTION_SETROTATIONSTYLE = "стиль вращения %1";
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = 'влево-вправо';
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = 'не вращать';
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = 'кругом';
Blockly.Msg.MOTION_XPOSITION = "положение x";
Blockly.Msg.MOTION_YPOSITION = "положение y";
Blockly.Msg.MOTION_DIRECTION = "направление";

Blockly.Msg.MOTION_SCROLLRIGHT = "scroll right %1";
Blockly.Msg.MOTION_SCROLLUP = "scroll up %1";
Blockly.Msg.MOTION_ALIGNSCENE = "align scene %1";
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = "bottom-left";
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = "bottom-right";
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = "middle";
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = "top-left";
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = "top-right";
Blockly.Msg.MOTION_XSCROLL = "x scroll";
Blockly.Msg.MOTION_YSCROLL = "y scroll";

// Operators blocks
Blockly.Msg.OPERATORS_ADD = "%1 + %2";
Blockly.Msg.OPERATORS_SUBTRACT = "%1 - %2";
Blockly.Msg.OPERATORS_MULTIPLY = "%1 * %2";
Blockly.Msg.OPERATORS_DIVIDE = "%1 / %2";
Blockly.Msg.OPERATORS_RANDOM = "выдать случайное от %1 до %2";
Blockly.Msg.OPERATORS_GT = "%1 > %2";
Blockly.Msg.OPERATORS_LT = "%1 < %2";
Blockly.Msg.OPERATORS_EQUALS = "%1 = %2";
Blockly.Msg.OPERATORS_AND = "%1 и %2";
Blockly.Msg.OPERATORS_OR = "%1 или %2";
Blockly.Msg.OPERATORS_NOT = "не %1";
Blockly.Msg.OPERATORS_JOIN = "слить %1 %2";
Blockly.Msg.OPERATORS_LETTEROF = "буква %1 of %2";
Blockly.Msg.OPERATORS_LENGTH = "длина of %1";
Blockly.Msg.OPERATORS_CONTAINS = "%1 содержит %2?";
Blockly.Msg.OPERATORS_MOD = "остаток от деления %1 на %2";
Blockly.Msg.OPERATORS_ROUND = "округлить %1";
Blockly.Msg.OPERATORS_MATHOP = "%1 от %2";
Blockly.Msg.OPERATORS_MATHOP_ABS = "модуль";
Blockly.Msg.OPERATORS_MATHOP_FLOOR = "округлить вниз";
Blockly.Msg.OPERATORS_MATHOP_CEILING = "округлить вверх";
Blockly.Msg.OPERATORS_MATHOP_SQRT = "квадратный корень";
Blockly.Msg.OPERATORS_MATHOP_SIN = "sin";
Blockly.Msg.OPERATORS_MATHOP_COS = "cos";
Blockly.Msg.OPERATORS_MATHOP_TAN = "tan";
Blockly.Msg.OPERATORS_MATHOP_ASIN = "asin";
Blockly.Msg.OPERATORS_MATHOP_ACOS = "acos";
Blockly.Msg.OPERATORS_MATHOP_ATAN = "atan";
Blockly.Msg.OPERATORS_MATHOP_LN = "ln";
Blockly.Msg.OPERATORS_MATHOP_LOG = "log";
Blockly.Msg.OPERATORS_MATHOP_EEXP = "e ^";
Blockly.Msg.OPERATORS_MATHOP_10EXP = "10 ^";

// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = "define %1";

// Sensing blocks
Blockly.Msg.SENSING_TOUCHINGOBJECT = "касается %1?";
Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER = 'указатель мышки';
Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE = 'край';
Blockly.Msg.SENSING_TOUCHINGCOLOR = "касается цвета %1?";
Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR = "цвет %1 касается %2?";
Blockly.Msg.SENSING_DISTANCETO = "расстояние до %1";
Blockly.Msg.SENSING_DISTANCETO_POINTER = 'указатель мышки';
Blockly.Msg.SENSING_ASKANDWAIT = "спросить %1 и ждать";
Blockly.Msg.SENSING_ANSWER = "ответ";
Blockly.Msg.SENSING_KEYPRESSED = "клавиша %1 нажата?";
Blockly.Msg.SENSING_MOUSEDOWN = "мышка нажата?";
Blockly.Msg.SENSING_MOUSEX = "мышка по x";
Blockly.Msg.SENSING_MOUSEY = "мышка по y";
Blockly.Msg.SENSING_SETDRAGMODE = "установить режим переноса %1";
Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE = 'перетасивать мышкой';
Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE = 'не перетаскивать';
Blockly.Msg.SENSING_LOUDNESS = "громкость";
Blockly.Msg.SENSING_LOUD = "громко?";
Blockly.Msg.SENSING_TIMER = "таймер";
Blockly.Msg.SENSING_RESETTIMER = "перезапустить таймер";
Blockly.Msg.SENSING_OF = "%1 на %2";
Blockly.Msg.SENSING_OF_XPOSITION = 'положение x';
Blockly.Msg.SENSING_OF_YPOSITION = 'положение y';
Blockly.Msg.SENSING_OF_DIRECTION = 'направление';
Blockly.Msg.SENSING_OF_COSTUMENUMBER = 'костюм #';
Blockly.Msg.SENSING_OF_COSTUMENAME = 'имя костюма';
Blockly.Msg.SENSING_OF_SIZE = 'размер';
Blockly.Msg.SENSING_OF_VOLUME = 'громкость';
Blockly.Msg.SENSING_OF_BACKDROPNUMBER = 'фон #';
Blockly.Msg.SENSING_OF_BACKDROPNAME = 'имя фона';
Blockly.Msg.SENSING_CURRENT = "текущие %1";
Blockly.Msg.SENSING_CURRENT_YEAR = 'год';
Blockly.Msg.SENSING_CURRENT_MONTH = 'месяц';
Blockly.Msg.SENSING_CURRENT_DATE = 'дата';
Blockly.Msg.SENSING_CURRENT_DAYOFWEEK = 'день недели';
Blockly.Msg.SENSING_CURRENT_HOUR = 'час';
Blockly.Msg.SENSING_CURRENT_MINUTE = 'минут';
Blockly.Msg.SENSING_CURRENT_SECOND = 'секунда';
Blockly.Msg.SENSING_DAYSSINCE2000 = "дней с 01.01.2000";
Blockly.Msg.SENSING_USERNAME = "имя участника";
Blockly.Msg.SENSING_USERID = "id участника";

// Sound blocks
Blockly.Msg.SOUND_PLAY = "играть звук %1";
Blockly.Msg.SOUND_PLAYUNTILDONE = "играть звук %1 до конца";
Blockly.Msg.SOUND_STOPALLSOUNDS = "остановить все звуки";
Blockly.Msg.SOUND_SETEFFECTO = "установить эффект %1 на %2";
Blockly.Msg.SOUND_CHANGEEFFECTBY = "изменить эффект %1 на %2";
Blockly.Msg.SOUND_CLEAREFFECTS = "убрать эффекты";
Blockly.Msg.SOUND_EFFECTS_PITCH = "высота звука";
Blockly.Msg.SOUND_EFFECTS_PAN = "панорама слева/справа";
Blockly.Msg.SOUND_CHANGEVOLUMEBY = "изменить громкость на %1";
Blockly.Msg.SOUND_SETVOLUMETO = "установить громкость %1%";
Blockly.Msg.SOUND_VOLUME = "громкость";

// Context menus
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';
Blockly.Msg.EDIT_PROCEDURE = 'Edit';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = 'Go to definition';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = 'Color';
Blockly.Msg.COLOUR_SATURATION_LABEL = 'Saturation';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = 'Brightness';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Make a Block';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = 'Make a List';
Blockly.Msg.NEW_LIST_TITLE = 'New list name:';
Blockly.Msg.LIST_MODAL_TITLE = 'New List';
Blockly.Msg.LIST_ALREADY_EXISTS = 'A list named "%1" already exists.';
Blockly.Msg.RENAME_LIST_TITLE = 'Rename all "%1" lists to:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = 'Rename List';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = 'New message';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = 'New message name:';
Blockly.Msg.BROADCAST_MODAL_TITLE = 'New Message';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = 'message1';
