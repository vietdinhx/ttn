<?php 
/**
 * @package Huge IT Slider
 * @author Huge-IT
 * @copyright (C) 2014 Huge IT. All rights reserved.
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 * @website		http://www.huge-it.com/
 **/
?>
<?php defined('_JEXEC') or die('Restricted access'); 
jimport('joomla.application.component.modeladmin');
jimport('joomla.application.component.helper');

class SliderModelVideo extends JModelAdmin {

    public function getTable($type = 'Video', $prefix = 'VideoTable', $config = array()) {
        return JTable::getInstance($type, $prefix, $config);
    }

    public function getForm($data = array(), $loadData = true) {

        $form = $this->loadForm(
                $this->option . '.video', 'video', array('control' => 'jform', 'load_data' => $loadData)
        );

        if (empty($form)) {
            return false;
        }

        return $form;
    }

    protected function loadFormData() {
        $data = JFactory::getApplication()->getUserState($this->option . '.editvideo.data', array());

        if (empty($data)) {
            $data = $this->getItem();
        }

        return $data;
    }

    function save($data) {
    
    }

}
