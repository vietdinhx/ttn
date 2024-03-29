<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_tags_popular
 *
 * @copyright   Copyright (C) 2005 - 2019 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;
$i = 0;
?>
<?php JLoader::register('TagsHelperRoute', JPATH_BASE . '/components/com_tags/helpers/route.php'); ?>
<div class="tagspopular<?php echo $moduleclass_sfx; ?>">
<?php if (!count($list)) : ?>
	<div class="alert alert-no-items"><?php echo JText::_('MOD_TAGS_POPULAR_NO_ITEMS_FOUND'); ?></div>
<?php else : ?>
<div style="padding-bottom:15px;">
	<?php foreach ($list as $item) : ?>
		<?php if($i!=0):?> | <?php endif; $i++;?>
		<a href="<?php echo JRoute::_(TagsHelperRoute::getTagRoute($item->tag_id . ':' . $item->alias)); ?>">
			<?php echo htmlspecialchars($item->title, ENT_COMPAT, 'UTF-8'); ?></a>
		<?php if ($display_count) : ?>
			<span class="tag-count badge badge-info"><?php echo $item->count; ?></span>
		<?php endif; ?>
	<?php endforeach; ?>
</div>
<?php endif; ?>
</div>
