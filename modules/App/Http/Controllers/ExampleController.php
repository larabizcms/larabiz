<?php
/**
 * LARABIZ CMS - Full SPA Laravel CMS
 *
 * @package    larabizcom/larabiz
 * @author     The Anh Dang
 * @link       https://larabiz.com
 */

namespace LarabizCMS\Modules\App\Http\Controllers;

use LarabizCMS\Core\Http\Controllers\Controller;
use LarabizCMS\Core\Support\PageBuilder\Elements\Card;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Editor;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Select;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Text as TextField;
use LarabizCMS\Core\Support\PageBuilder\Elements\Forms\Textarea;
use LarabizCMS\Core\Support\PageBuilder\Elements\Grids\ContainerGrid;
use LarabizCMS\Core\Support\PageBuilder\Elements\Grids\ItemGrid;
use LarabizCMS\Core\Support\PageBuilder\Elements\Text;
use LarabizCMS\Core\Support\PageBuilder\Page;

class ExampleController extends Controller
{
    public function index()
    {
        // $text = Text::make('Dashboard', [
        //     //'fontWeight' => 600,
        //     //'mt' => '50px',
        //     'color' => '#3f51b5',
        // ])->mb(3);

        $input = TextField::make(['name' => 'textfield', 'label' => 'Textfield'])
            ->placeholder('Placeholder text');
        $textarea = Textarea::make(['name' => 'textarea', 'label' => 'Textarea'])
            ->rows(5)->placeholder('Placeholder text');
        $select = Select::make(['name' => 'select', 'label' => 'Selector'])
            ->options(['' => '-- Select --', 'option1' => 'Option 1', 'option2' => 'Option 2', 'option3' => 'Option 3'])
            ->value('');
        $editor = Editor::make(['name' => 'editor', 'label' => 'Editor'])->value('<b>Hello</b>');

        $card = Card::make(
            [
                //$text,
                ContainerGrid::make()->add(
                    $input,
                    $textarea,
                    $select,
                    $editor,
                ),
            ]
        )->title('Form');
        $col3 = ItemGrid::make()->xs(6)->add($card);

        return Page::make(
            [
                ContainerGrid::make()->add($col3),
            ]
        )->fill(['title' => 'Example', 'description' => 'Example']);
    }
}
