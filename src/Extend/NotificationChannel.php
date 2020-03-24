<?php

namespace Flarum\Extend;

use Flarum\Extension\Extension;
use Flarum\User\NotificationPreference;
use Illuminate\Contracts\Container\Container;

class NotificationChannel implements ExtenderInterface
{
    /**
     * @var string
     */
    private $channel;

    private $enabled = [];

    public function __construct(string $channel)
    {
        $this->channel = $channel;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        NotificationPreference::addChannel($this->channel, $this->enabled);
    }

    public function enabled(string $type, bool $enabled = true)
    {
        $this->enabled[$type] = $enabled;

        return $this;
    }
}